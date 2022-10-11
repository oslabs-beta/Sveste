import { render, screen } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
import { describe, beforeEach, expect, it } from 'vitest';
import Block from '../src/components/form/Block.svelte';

describe('Create base block', () => {
  it('renders an add button', () => {
    let view = render(Block, { type: 'root' });
    expect(() => screen.getByRole('button')).not.toThrow();
    expect(() => screen.getByText('+root')).not.toThrow();
  });
  it('no delete button should be rendered on root block', () => {
    let view = render(Block, { type: 'root' });
    expect(() => screen.getByRole('DeleteButton')).toThrow();
  });
});

//Unsure of how to mock functionality
describe('Clicking +root creates an AddButtonMenu', () => {
  // beforeEach(() => {
  //   let view = render(Block)
  //   const user = userEvent.setup();
  // })
  it.todo('renders an addmenu', () => {
    let view = render(Block, { type: 'root' });
    const user = userEvent.setup();
    user.click(screen.getByRole('button'));
    expect(() => screen.getByRole('menu')).not.toThrow();
  });
  it.todo('it renders an add menu with describeStatement button', () => {
    let view = render(Block, { type: 'root' });
    const user = userEvent.setup();
    user.click(screen.getByRole('button'));
    console.log(view);
    expect(() => screen.getByText('+describeStatement')).not.toThrow(); //this should fail
  });
});

//Tests describeBlock - not working
describe('Add a describeStatement block', () => {
  it.todo('renders an add button', () => {
    let view = render(Block, { type: 'describeStatement' });
    expect(() => screen.getByRole('button')).not.toThrow();
    expect(() => screen.getByText('+describeStatement')).not.toThrow();
  });
  it.todo('renders delete button', () => {
    let view = render(Block, { type: 'describeStatement' });
    expect(() => screen.getByText('-')).not.toThrow();
  });
});
