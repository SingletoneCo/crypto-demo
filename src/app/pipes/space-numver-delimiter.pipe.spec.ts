import { SpaceNumberDelimiterPipePipe } from './space-number-delimiter.pipe';


describe('SpaceNumberDelimiterPipePipe', () => {
  const pipe = new SpaceNumberDelimiterPipePipe();

  it('presents numbers with space as separator', () => {
    expect(pipe.transform('34,966,139,282')).toBe('34 966 139 282');
    expect(pipe.transform('2.43')).toBe('2.43');
    expect(pipe.transform('-9,053')).toBe('-9 053');
    expect(pipe.transform(10245801950)).toBe('10 245 801 950');
    expect(pipe.transform(192402051.027)).toBe('192 402 051.027');
    expect(pipe.transform(-8467.33)).toBe('-8 467.33');
  })
})
