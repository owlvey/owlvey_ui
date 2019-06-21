// import Avatar from "shared/Avatar";
// import React from "react";
const conf = {
  avatar: {
    title: "Avatar Component",
    samples: [
      {
        title: "Avatar Sample with default props",
        code: `<Avatar
    rounded={false}
    circle={true}
    size={40}
    style={{}}
    onClick={() => { alert("click"); }}
    className="can-click"
    src={undefined}
    />`,
      },
      {
        title: "Avatar Sample with custom props",
        code: `<Avatar
        rounded={false}
        circle={true}
        size={80}
        style={{}}
        onClick={() => { alert("Custom props Click"); }}
        className="can-click"
        src={"https://pbs.twimg.com/profile_images/378800000345048354/cdb82c08bfb75bd122148048b045d908_400x400.jpeg"}
        />`,
      },
    ],
  },
  dropdown: {
    title: "Dropdown Component",
    samples: [
      {
        title: "Dropdown sample",
        code: `
  <Dropdown
  data={[{"customerId": 1,"name": "Owlvey"}, {"customerId": 2,"name": "Ayni"}]}
  displayMember={"name"}
  />
`,
      },
      {
        title: "Dropdown sample with defaultValue and extra className",
        code: `
  <Dropdown
  data={[{"customerId": 1,"name": "Owlvey"}, {"customerId": 2,"name": "Ayni"}]}
  defaultValue={{"customerId": 2,"name": "Ayni"}}
  displayMember={"name"}
  extraClassNames={"btn-primary"}
  />
`,
      },
    ],
  },

  iconwidget: {
    title: "IconWidget Component",
    samples: [
      {
        title: "IconWidget sample",
        code: `
        <IconWidget
        bgColor="white"
        icon={MdThumbUp}
        inverse={false}
        title="50+ Likes"
        subtitle="People you like"
      />
`,
      },
    ],
  },

  searchinput: {
    title: "SearchInput Component",
    samples: [
      {
        title: "SearchInput Sample",
        code: `
<SearchInput/>        
        `,
      },
    ],
  },

  numberwidget: {
    title: "NumberWidget Component",
    samples: [
      {
        title: "NumberWidget Sample",
        code: `
    <NumberWidget
    title="Total Profit"
    subtitle="This month"
    number="9.8k"
    color="primary"
    progress={{
      value: 75,
      label: "Last month"
    }}
  />    
    `,
      },
    ],
  },

  avatarcard: {
    title: "AvatarCard Component",
    samples: [
      {
        title: "AvatarCard Sample",
        code: `
<AvatarCard 
avatar={"https://pbs.twimg.com/profile_images/378800000345048354/cdb82c08bfb75bd122148048b045d908_400x400.jpeg"}
avatarSize={80}
title="Title"
subtitle="Subtitle"
text="Text sample"
inverse={true}
/>        
        `,
      },
    ],
  },

  usercard: {
    title: "UserCard Component",
    samples: [
      {
        title: "UserCard Sample",
        code: `
  <UserCard
  avatar={"https://pbs.twimg.com/profile_images/378800000345048354/cdb82c08bfb75bd122148048b045d908_400x400.jpeg"}
  title="Chris"
  subtitle="Project Lead"
  text="Give me a star!"
  inverse={true}
  style={{
    height: 300
  }}
/>        
        `,
      },
    ],
  },

  announcementcard: {
    title: "AnnouncementCard Component",
    samples: [
      {
        title: "AnnouncementCard Sample",
        code: `
  <AnnouncementCard
  color="gradient-secondary"
  header="Announcement"
  avatarSize={60}
  name="Felipe"
  date="1 hour ago"
  inverse={true}
  avatar={"https://pbs.twimg.com/profile_images/378800000345048354/cdb82c08bfb75bd122148048b045d908_400x400.jpeg"}
  text="Lorem ipsum dolor sit amet,consectetuer edipiscing elit,sed diam nonummy euismod tinciduntut laoreet doloremagna"
  buttonProps={{
    children: "show",
  }}
  style={{ height: 500 }}
/>   
        `,
      },
    ],
  },

  todoscard: {
    title: "TodosCard Component",
    samples: [
      {
        title: "TodosCard Sample",
        code: `
<TodosCard todos={
  [
    { id: 1, title: "task -1", done: true },
    { id: 2, title: "task -2", done: false },
    { id: 3, title: "task -3", done: true },
    { id: 4, title: "task -4", done: true },
    { id: 5, title: "task -5", done: false }
  ]

} />     
        `,
      },
    ],
  },
};

export default conf;
