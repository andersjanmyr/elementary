
  window.front_page = {
    template: 'front-page',
    blocks: [
      {
        block: {
          template: 'top-block',
          elements: [
            {
              element: {
                template: 'top-element',
                source: 'tapir-ipsum.md'
              }
            }
          ]
        },
        block: {
          template: 'center-block',
          elements: [
            {
              element: {
                template: 'text-element',
                source: 'tapir-ipsum.md'
              }
            }
          ]
        }
      }
    ]
  };
