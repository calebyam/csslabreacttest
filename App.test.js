import { render, screen, fireEvent } from '@testing-library/react';

// import your story from App.stories.js

import { App } from './App.stories';

test('button first displays "click me"', () => {
    const { getByText } = render(<App/>);
    const button = getByText('click me');
    expect(button).toBeInTheDocument();
  });

test('button changes text when clicked', () => {
    const { getByText } = render(<App/>);
    const button = getByText('click me');
    expect(button).toBeInTheDocument();
  
    button.click();
    expect(button).toHaveTextContent('thanks');
  
  });
  


// Add your tests here
// See https://storybook.js.org/docs/react/writing-tests/importing-stories-in-tests#example-with-testing-library