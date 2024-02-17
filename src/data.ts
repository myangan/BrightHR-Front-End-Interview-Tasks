export type FileNode = {
  type: string;
  name: string;
  added?: string;
  files?: FileNode[];
};

export const fileStructure: FileNode[] = [
  {
    type: "pdf",
    name: "Employee Handbook",
    added: "2017-01-06",
  },
  {
    type: "pdf",
    name: "Public Holiday policy",
    added: "2016-12-06",
  },
  {
    type: "folder",
    name: "Expenses",
    files: [
      {
        type: "doc",
        name: "Expenses claim form",
        added: "2017-05-02",
      },
      {
        type: "doc",
        name: "Fuel allowances",
        added: "2017-05-03",
      },
    ],
  },
  {
    type: "csv",
    name: "Cost centres",
    added: "2016-08-12",
  },
  {
    type: "folder",
    name: "Misc",
    files: [
      {
        type: "doc",
        name: "Christmas party",
        added: "2017-12-01",
      },
      {
        type: "mov",
        name: "Welcome to the company!",
        added: "2015-04-24",
      },
    ],
  },
];

export const homePageMsg = {
  title: "Hello It is Munkh-Erdene.",
  text: "I wanted to let you know that although I was assigned tasks for the Junior and Middleweight roles, I've invested a bit more time on them than initially discussed. My intention was not only to meet the requirements but also to showcase the quality of my work and my dedication. I thoroughly enjoyed delving deeper into the tasks and hope my additional efforts will demonstrate my capabilities effectively.",
  end: "Looking forward to your feedback. Have a wonderful day!",
};
