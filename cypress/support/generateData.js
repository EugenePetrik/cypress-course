import { build, fake } from 'test-data-bot';

export const toDoItemBuilder = build('ToDoItem').fields({
  toDoItemName: fake(f => f.lorem.words()),
  toDoItemCompleted: fake(f => f.random.boolean()),
});

export const userBuilder = build('User').fields({
  userEmail: fake(f => f.internet.email()),
  userPassword: fake(f => f.internet.password()),
});
