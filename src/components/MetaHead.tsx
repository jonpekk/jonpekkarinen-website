import React, { useEffect } from 'react';

type MetaHeadProps = {
  title: string,
  description: string,
  children: React.ReactElement | React.ReactElement[]
}

function MetaHead({ title, description, children }: MetaHeadProps) {
  useEffect(() => {
    // Update document title
    document.title = title || 'Default Title';

    // Add or update meta tags
    const descriptionMeta = document.querySelector('meta[name="description"]');
    if (descriptionMeta) {
      descriptionMeta.setAttribute('content', description || 'Default description');
    } else {
      const newDescriptionMeta = document.createElement('meta');
      newDescriptionMeta.setAttribute('name', 'description');
      newDescriptionMeta.setAttribute('content', description || 'Default description');
      document.head.appendChild(newDescriptionMeta);
    }

    // Cleanup function to remove added meta tags (optional)
    return () => {
      if (descriptionMeta) {
        document.head.removeChild(descriptionMeta);
      }
      // Remove other dynamically added meta tags if necessary
    };
  }, [title, description]); // Run when title or description change

  return (
    <div>
      {children}
    </div>
  );
}

export default MetaHead;
