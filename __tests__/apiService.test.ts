import axios from 'axios';
import { BaseResponse, Hit } from '../src/data/types/news';
import apiService from '../src/data/services/apiService';

// Mock axios and Config
jest.mock('axios');
jest.mock('react-native-config', () => ({
  API_URL: 'https://api.example.com/search?q=$SEARCH_TERM$',
  DEFAULT_SEARCH_TERM: 'mobile',
}));

describe('apiService', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should fetch data successfully with getData', async () => {
    let mock = { data: { hits: [{ id: 1, title: 'Test Data' }] } };
    axios.get.mockResolvedValue(mock);
    const data = await apiService.getData();
    expect(axios.get).toHaveBeenCalledWith('https://api.example.com/search?q=mobile');
    expect(data).toEqual(mock.data.hits);
  });

  test('should return null if getData fails', async () => {
    axios.get.mockRejectedValueOnce(new Error('Network Error'));
    const data = await apiService.getData();
    expect(axios.get).toHaveBeenCalledWith('https://api.example.com/search?q=mobile');
    expect(data).toBeNull();
  });

  test('should fetch preference data successfully with getPreferenceData', async () => {
    const mockData: BaseResponse = {
      hits: [{ id: 1, title: 'Test Preference' }] as Hit[],
    };
    const searchTerm = 'testTerm';
    axios.get.mockResolvedValueOnce({ data: mockData });
    const data = await apiService.getPreferenceData(searchTerm);
    expect(axios.get).toHaveBeenCalledWith('https://api.example.com/search?q=testTerm');
    expect(data).toEqual(mockData.hits);
  });

  test('should return null if getPreferenceData fails', async () => {
    axios.get.mockRejectedValueOnce(new Error('Network Error'));
    const data = await apiService.getPreferenceData('testTerm');
    expect(data).toBeNull();
  });

  test('should use default search term if searchTerm is not provided in getPreferenceData', async () => {
    const mockData: BaseResponse = {
      hits: [{ id: 1, title: 'Test Default' }] as Hit[],
    };
    axios.get.mockResolvedValueOnce({ data: mockData });
    const data = await apiService.getPreferenceData('');
    expect(axios.get).toHaveBeenCalledWith('https://api.example.com/search?q=mobile');
    expect(data).toEqual(mockData.hits);
  });
});
