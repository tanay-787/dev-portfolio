// Topic inside repositoryTopics
export interface Topic {
    name: string;
  }
  
  export interface RepositoryTopicNode {
    topic: Topic;
  }
  

  
  // Each repository inside the list
  export interface RepositoryItem {
    name: string;
    description: string | null;
    url: string;
    homepageUrl: string | null;
    showcaseImage?: string | null;
    repositoryTopics: {
      nodes: RepositoryTopicNode[];
    };
  }
  
  // The list items (portfolio repositories)
  export interface ListItem {
    name: string;
    items: {
      nodes: RepositoryItem[];
    };
  }
  
  // The lists container under user
  export interface UserLists {
    nodes: ListItem[];
  }
  
  // The user object
  export interface User {
    lists: UserLists;
  }
  
  // Root GraphQL response
  export interface PortfolioQueryResponse {
    data: {
      user: User | null;
    };
  }
  