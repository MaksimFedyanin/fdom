# fdom

Functional dom - Fantastic dom, Functional ui - Fantastic ui

description of functional style components

all display logic in a single file, with all the power of react js

**why?**
- 1 you can do almost everything you do with html and css, sometimes even more
- 2 css is difficult to check, function dom simplifies code review
- 3 simplifies ui testing

**examples**

div
```
Div(
    Span('Your text')
      .color(Color.white)
  )
    .display(Display.FLEX)
    .flexDirection(FlexDirection.COLUMN)
    .justifyContent(Alignment.FLEX_START)
    .alignItems(Alignment.CENTER)
    .width(500)
    .height('500px')
    .background(Color.blue)
    .padding(Direction.VERTICAL, 50)
    .padding(Direction.LEFT, 100)
    .render();
```
input
```
const [value, setValue] = useState('');

Input({
      value,
      onChange: (event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value),
    })
    .color(Color.black)
```
