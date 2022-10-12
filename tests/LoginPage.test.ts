import { render, screen } from '@testing-library/svelte';
import { describe, beforeEach, expect, it } from 'vitest';
import LoginPage from 'src/pages/LoginPage.svelte';
import userEvent from '@testing-library/user-event';

describe('Login page', () => {
  it('Renders a form', () => {
    const view = render(LoginPage);
    expect(() => screen.findByRole('form')).not.toThrow();
  });
  it('Renders a Login Button', () => {
    const view = render(LoginPage);
    //check for button that has the text login and test for no errors
    expect(() => screen.findByText('Login')).not.toThrow();
  });
  it('Renders a Signup Button', () => {
    const view = render(LoginPage);
    //check for button that has the text sign up and test for no errors
    expect(() => screen.findByText('Signup')).not.toThrow();
  });
});
