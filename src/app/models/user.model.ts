export interface User {
    id?: number; // Facultatif, car il peut ne pas exister avant l'inscription
    username: string;
    password: string;
    email?: string; // Facultatif si non utilisé
  }
  