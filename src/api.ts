export type User = {
  login: { uuid: string };
  name: { title: string; first: string; last: string };
};

export async function getUserData(): Promise<User> {
  const response = await fetch('https://randomuser.me/api/');
  const data = await response.json();
  return data.results[0];
}
