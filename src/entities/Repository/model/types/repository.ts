import { Author } from '@/shared';

export interface Repository {
    id: number;
    name: string;
    description: string;
    url: string;
    language: string;
    stars: number;
    forks: number;
    watchers: number;
    created_at: string;
    updated_at: string;
    pushed_at: string;
    author: Author;
}
