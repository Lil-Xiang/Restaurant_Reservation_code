import { describe, it, expect } from 'vitest'
import { organizeDate } from '../composables/organizeDate'

describe('organizeDate function', () => {
  it('returns the formatted date string when provided a valid date string', () => {
    const date = '2024-02-23';
    const formattedDate = organizeDate(date);
    expect(formattedDate).toBe('2024-2-23');
  })

  it('returns the formatted date string when provided a valid Date object', () => {
    const date = new Date('2024-02-23');
    const formattedDate = organizeDate(date);
    expect(formattedDate).toBe('2024-2-23');
  })

  it('returns the formatted current date string when provided null', () => {
    const formattedDate = organizeDate(null);
    const currentDate = new Date();
    const expectedDate = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;
    expect(formattedDate).toBe(expectedDate);
  })
})
