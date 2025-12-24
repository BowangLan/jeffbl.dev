type Icon = "external" | "github";

interface Link {
  name: string;
  href: string;
  icon: Icon;
}

interface SanityImage {
  asset: any;
}

interface Category {
  title: string;
  slug: string;
}

interface Tag {
  slug: string;
  name: string;
  iconFileName?: string;
  iconScale?: number;
  categories: Category[];
}

interface DateRange {
  start: string;
  end?: string;
  ongoing?: boolean;
}

interface Project {
  title: string;
  slug: string;
  shortDescription: string;
  longDescription: string;
  websiteUrl?: string;
  githubUrl?: string;
  dateRange: DateRange;
  tags: Tag[];
  content: any[];
  current?: boolean;
}

interface Experience {
  title: string;
  slug: string;
  organization: string;
  location: string;
  shortDescription: string;
  longDescription: string;
  content: string;
  dateRange: DateRange;
}

interface Author {
  name: string;
  slug: string;
}

interface Qoute {
  qoute: string;
  slug: string;
  authors: Author[];
}