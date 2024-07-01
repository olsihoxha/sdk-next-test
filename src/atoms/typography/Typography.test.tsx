import { render } from '@testing-library/preact';
import Typography from '.';

describe('Typography is rendered', () => {
  it('the text is visible', () => {
    const { container } = render(
      <Typography text="Hello" component="h1" fontsize="text-sm" fontweight="font-bold" />,
    );
    expect(container.textContent).toMatch('Hello');
  });

  it('renders the correct HTML tag h1', () => {
    const { container } = render(
      <Typography text="Hello" component="h1" fontsize="text-sm" fontweight="font-bold" />,
    );
    const headerElement = container.querySelector('h1');
    expect(headerElement).toBeInTheDocument();
  });

  it('text has the correct fontSize', () => {
    const { container } = render(
      <Typography text="Hello" component="h2" fontsize="text-xs" fontweight="font-bold" />,
    );
    const headerElement = container.querySelector('h2');
    const classAttribute = headerElement.getAttribute('class');
    expect(classAttribute).toContain('text-xs');
  });

  it('text has the correct fontSize and fontWeight', () => {
    const { container } = render(
      <Typography text="Hello" component="p" fontsize="text-base" fontweight="font-bold" />,
    );
    const headerElement = container.querySelector('p');
    const classAttribute = headerElement.getAttribute('class');
    expect(classAttribute).toContain('font-bold');
    expect(classAttribute).toContain('text-base');
  });

  it('custom "class" has more importance', () => {
    const { container } = render(
      <Typography
        text="Hello"
        component="p"
        fontsize="text-base"
        fontweight="font-bold"
        class="text-2xl"
      />,
    );
    const headerElement = container.querySelector('p');
    const classAttribute = headerElement.getAttribute('class');
    expect(classAttribute).not.toContain('text-base');
    expect(classAttribute).toContain('text-2xl');
    expect(classAttribute).toContain('font-bold');
  });
});
