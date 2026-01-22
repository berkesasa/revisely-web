'use client';

import { ReactNode, useMemo, createElement } from 'react';

type HTMLTag = 'div' | 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'b' | 'i' | 'u' | 'strong' | 'em';

interface RichTextProps {
    children: string;
    className?: string;
    as?: HTMLTag;
}

/**
 * RichText component that safely renders HTML tags in translation strings.
 * 
 * Supports placeholders:
 * - {br} for line breaks
 * - {b}text{/b} for bold
 * - {i}text{/i} for italic
 * - {u}text{/u} for underline
 * 
 * Usage in i18n files:
 * "title": "Visual Feedback &{br}AI-Powered UI Edits"
 * "text": "This is {b}bold{/b} and this is {i}italic{/i}"
 * 
 * Usage in components:
 * <RichText>{translations.title}</RichText>
 * <RichText as="p" className="text-lg">{translations.description}</RichText>
 */
export default function RichText({ children, className, as = 'span' }: RichTextProps) {
    const parsedContent = useMemo(() => {
        return parseRichText(children);
    }, [children]);

    return createElement(as, { className }, parsedContent);
}

/**
 * Parse translation string and convert placeholders to React elements.
 * Handles: {br}, {b}...{/b}, {i}...{/i}, {u}...{/u}, {strong}...{/strong}, {em}...{/em}
 */
function parseRichText(text: string): ReactNode[] {
    const result: ReactNode[] = [];
    let key = 0;
    let remaining = text;

    // First, handle paired tags like {b}text{/b}
    const pairedTagPattern = /\{(b|i|u|strong|em)\}(.*?)\{\/\1\}/gi;
    remaining = remaining.replace(pairedTagPattern, (match, tag, content) => {
        return `__TAG_${tag.toUpperCase()}_START__${content}__TAG_${tag.toUpperCase()}_END__`;
    });

    // Split by {br} placeholder
    const parts = remaining.split(/\{br\}/gi);

    parts.forEach((part, index) => {
        // Process any paired tags in this part
        const processedPart = processPairedTags(part, key);
        key += processedPart.keyIncrement;

        if (processedPart.elements.length > 0) {
            result.push(...processedPart.elements);
        }

        // Add line break after each part except the last
        if (index < parts.length - 1) {
            result.push(<br key={`br-${key++}`} />);
        }
    });

    return result.length > 0 ? result : [text];
}

function processPairedTags(text: string, startKey: number): { elements: ReactNode[], keyIncrement: number } {
    const elements: ReactNode[] = [];
    let keyIncrement = 0;

    // Match our placeholder markers
    const markerPattern = /__TAG_(B|I|U|STRONG|EM)_START__(.*?)__TAG_\1_END__/g;
    let lastIndex = 0;
    let match;

    while ((match = markerPattern.exec(text)) !== null) {
        // Add text before marker
        if (match.index > lastIndex) {
            elements.push(text.slice(lastIndex, match.index));
        }

        const tag = match[1].toLowerCase() as 'b' | 'i' | 'u' | 'strong' | 'em';
        const content = match[2];
        elements.push(createElement(tag, { key: startKey + keyIncrement++ }, content));

        lastIndex = match.index + match[0].length;
    }

    // Add remaining text
    if (lastIndex < text.length) {
        elements.push(text.slice(lastIndex));
    }

    // If no markers found, just return the original text
    if (elements.length === 0 && text) {
        elements.push(text);
    }

    return { elements, keyIncrement };
}

/**
 * Utility function to use in non-component contexts.
 * Returns an object suitable for dangerouslySetInnerHTML.
 * Only use for trusted translation strings.
 */
export function createRichTextHTML(text: string): { __html: string } {
    // Convert placeholders to HTML
    let html = text
        .replace(/\{br\}/gi, '<br>')
        .replace(/\{(b|i|u|strong|em)\}(.*?)\{\/\1\}/gi, '<$1>$2</$1>');

    return { __html: html };
}
