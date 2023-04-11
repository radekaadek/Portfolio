type Hobby = {
    id: number;
    title: string;
    url: string;
  }
  
type Skill = Hobby & {
    description: string;
    // proficiency - a number from 1 to 5
    proficiency: number;
}
