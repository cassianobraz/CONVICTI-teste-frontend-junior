const BASE_URL = 'http://localhost:8080';
const BASE_API_URL = 'http://localhost:8080/api/v1';

export async function createTokenOauth(userData) {
  try {
    console.log('Dados enviados ao backend:', userData);

    const response = await fetch(`${BASE_URL}/oauth/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Erro ao criar token: ${errorData.error || response.statusText}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Erro na requisição:', error);
    throw error;
  }
}

export async function getUser(token) {
  try {
    const response = await fetch(`${BASE_API_URL}/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Erro ao buscar usuário: ${errorData.error || response.statusText}`);
    }

    const result = await response.json();
    console.log('Dados recebidos do backend:', result);
    return result;
  } catch (error) {
    console.error('Erro na requisição:', error);
    throw error;
  }
}