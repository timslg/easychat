import { Injectable } from '@angular/core';

/**
 * Service for managing data in the local storage.
 */
@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  /**
   * Saves data in the local storage.
   * @param key - The key under which the data will be stored.
   * @param value - The data to be stored.
   */
  public saveData(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  /**
   * Retrieves data from the local storage.
   * @param key - The key for which data needs to be retrieved.
   * @returns The data stored under the specified key.
   */
  public getData(key: string): string | null {
    return localStorage.getItem(key)
  }

  /**
   * Removes data from the local storage.
   * @param key - The key for which data needs to be removed.
   */
  public removeData(key: string): void {
    localStorage.removeItem(key);
  }

  /**
   * Clears all data from the local storage.
   */
  public clearData(): void {
    localStorage.clear();
  }
  
}
