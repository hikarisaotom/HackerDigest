import { mapToArticle } from '../src/domain/utils';
import mockHitData from './mockData/mockHitData';

describe('Utility functions', () => {
  describe('mapToArticle', () => {

    test('should map valid Hit data to article correctly', () => {
      const hits = mockHitData;

      const result = mapToArticle(hits);

      expect(result).toEqual([
        {
          id: '123',
          title: 'Mock Article Title 1',
          content: 'This is the content of the mock article 1.',
          author: 'John Doe',
          url: 'http://example.com/mock-article-1',
          date: '2025-01-24',
        },
        {
          id: '456',
          title: 'Mock Article Title 2',
          content: 'Content for the mock article 2.',
          author: 'Jane Smith',
          url: 'http://example.com/mock-article-2',
          date: '2025-01-23',
        },
        {
          id: '789',
          title: 'Mock Article Title 3',
          content: 'This is the content of the mock article 3.',
          author: 'Alex Johnson',
          url: 'http://example.com/mock-article-3',
          date: '2025-01-22',
        }
      ]);
    });

    test('should handle missing fields in Hit data gracefully', () => {
      const hits = [
        {
          objectID: '456',
          story_title: 'Test Title Missing Author',
          content: 'Test Content',
          created_at: '2025-01-25T00:00:00Z',
        },
      ];

      const result = mapToArticle(hits);

      expect(result).toEqual([
        {
          id: '456',
          title: 'Test Title Missing Author',
          content: 'Test Content',
          author: 'Unknown',
          url: '',
          date: '2025-01-24',
        },
      ]);
    });

    test('should return an empty array when input is null or empty', () => {
      const result = mapToArticle(null);
      expect(result).toEqual([]);

      const resultEmpty = mapToArticle([]);
      expect(resultEmpty).toEqual([]);
    });

  });

});