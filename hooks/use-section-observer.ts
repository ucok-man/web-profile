import { RefObject, useEffect, useRef } from "react";

/**
 * Custom hook to observe multiple sections and trigger animations when they come into view
 *
 * @param setActiveSection - Function to update which section is currently active
 * @returns A ref object to attach to section elements
 *
 * @example
 * const sectionsRef = useSectionObserver(setActiveSection);
 * <section ref={(el) => sectionsRef.current[0] = el}>...</section>
 */
export function useSectionObserver(
  onInterSecting: (entry: IntersectionObserverEntry) => void
  //   setActiveSection: (id: T) => void
): RefObject<(HTMLElement | null)[]> {
  // Create a ref to store references to all section elements we want to observe
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    // Create an IntersectionObserver - this is like a "watcher" that monitors
    // when elements enter or leave the visible viewport
    const observer = new IntersectionObserver(
      (entries) => {
        // This callback runs whenever any observed element's visibility changes
        // 'entries' is an array of all elements that changed visibility
        entries.forEach((entry) => {
          // Check if the element is currently visible in the viewport
          // (as opposed to leaving the viewport)
          if (entry.isIntersecting) {
            onInterSecting(entry);
          }
        });
      },
      {
        // threshold: 0.3 means trigger when 30% of the element is visible
        // So the animation starts when the section is partially visible
        threshold: 0.3,

        // rootMargin adjusts the viewport boundaries
        // "0px 0px -20% 0px" means: shrink the bottom edge by 20%
        // This makes sections trigger BEFORE they fully reach the bottom of screen
        // Format: top right bottom left (like CSS margin)
        rootMargin: "0px 0px -20% 0px",
      }
    );

    // Loop through all section elements we've stored in the ref
    // and tell the observer to start watching each one
    sectionsRef.current.forEach((section) => {
      // Only observe if the section element actually exists (not null)
      if (section) {
        observer.observe(section);
      }
    });

    // Cleanup function: runs when component unmounts
    // Disconnects the observer to prevent memory leaks and unnecessary processing
    return () => {
      observer.disconnect();
    };
  }, [onInterSecting]); // Re-run if setActiveSection function changes

  // Return the ref so the component can attach it to section elements
  return sectionsRef;
}
