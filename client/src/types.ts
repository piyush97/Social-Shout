export interface Post {
    identifier: string;
    title: string;
    slug: string;
    subName: string;
    createdAt: string;
    updatedAt: string;
    body: string;
    // Virtual Fields
    url: string;
    username: string;
}
