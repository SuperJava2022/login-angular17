export interface Session {
  id: number | null;
  username: string;
  token: string;
  status: boolean;
  dateStart: string | null;
  dateEnd: string | null;
}
