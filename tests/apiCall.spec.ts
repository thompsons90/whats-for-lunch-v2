import { test, expect } from '@playwright/test';
import { apiKey } from '../src/assets/myKey'

test('API GET Request', async({ request }) => {
    
    const response = await request.get(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}`)
    expect(response.status()).toBe(200)
    
    console.log(await response.json());
})  