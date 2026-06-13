export interface Project {
  id: string;
  title: string;
  tags: string[];
  description: string;
  images: string[];
  client?: string;
}

export const projects: Project[] = [
  {
    id: "project-1",
    title: "",
    tags: [],
    description: "",
    images: [],
  },
  {
    id: "project-2",
    title: "",
    tags: [],
    description: "",
    images: [],
  },
  {
    id: "project-3",
    title: "",
    tags: [],
    description: "",
    images: [],
  },
];

export const contact = {
  name: "Kinga Kowalska",
  phone: "+48 000 000 000",
  email: "kinga@example.com",
};
