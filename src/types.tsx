type ListItem = {
    id: number;
    title: string;
    url: string;
  }
  
type Skill = ListItem & {
    description: string;
    // proficiency - a number from 1 to 5
    proficiency: number;
}

type ListItemImg = ListItem & {
    img: JSX.Element;
}

type ProgrammingLang = ListItemImg & {
    // proficiency - a number from 1 to 5
    proficiency: number;
}

type Tab = {
    id: number;
    title: string;
    url: string;
}
