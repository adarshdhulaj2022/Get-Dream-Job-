export interface JobThumbnail {
    category: string;
    title: string;
    imageName: string;
}

export interface Job {
    id: string;
    title: string;
    createdAt: string; 
    createdBy: string;
    modifiedAt: string;
    tableTitle: string;
    organizationName: string;
    postName: string;
    dregree: string;
    batch: string;
    salary: string;
    experience: string;
    location: string;
    jobDiscription: string;
    eligibility: string;
    tags: string;

}

export interface Post {
    id: string;
    title : string;
    imageUrl: string;
    jobDiscription: string;
    eligibility: string;
    tags: string;
    publishedDate: string;
    heading: string;
    organizationName: string;
    postName    : string;
    degree: string;
    batch: string;
    salary: string;
    experience: string;
    location   : string; 
    lastDate: string;
}

export interface AddPostRequest {
    title : string | undefined;
    imageUrl: string | undefined;
    jobDiscription: string | undefined;
    eligibility: string | undefined;
    tags: string | undefined;
    publishedDate: string | undefined;
    heading: string | undefined;
    organizationName: string | undefined;
    postName: string | undefined;
    degree: string | undefined;
    batch: string | undefined;
    salary: string | undefined;
    experience: string | undefined;
    location   : string | undefined;
    lastDate: string | undefined;
}