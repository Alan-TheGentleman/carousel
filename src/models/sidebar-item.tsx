export interface GentlemanStateManagerRepository {
  title: string;
  href: string;
  image: string;
  alt: string;
}

export interface GentlemanStateManagerItem extends GentlemanStateManagerRepository {
  subtitle: string;
}
