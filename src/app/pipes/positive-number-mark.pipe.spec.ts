import { PositiveNumberMarkPipe } from './positive-number-mark.pipe';

describe('PositiveNumberMarkPipe', () => {
  const pipe = new PositiveNumberMarkPipe();

  it('adds plus sign to positive numbers', () => {
    expect(pipe.transform(4334)).toBe('+4,334');
    expect(pipe.transform(8)).toBe('+8');
    expect(pipe.transform(0.043)).toBe('+0.043');
    expect(pipe.transform('4538')).toBe('+4538');
    expect(pipe.transform('39')).toBe('+39');
    expect(pipe.transform('0.18')).toBe('+0.18');
  })

  it('returns unchanged input for 0', () => {
    expect(pipe.transform('0')).toBe('0');
    expect(pipe.transform(0)).toBe('0');
  })

  it('returns unchanged input for negative values', () => {
    expect(pipe.transform(-4334)).toBe('-4,334');
    expect(pipe.transform(-8)).toBe('-8');
    expect(pipe.transform(-0.043)).toBe('-0.043');
    expect(pipe.transform('-4538')).toBe('-4538');
    expect(pipe.transform('-39')).toBe('-39');
    expect(pipe.transform('-0.18')).toBe('-0.18');
  })
})
