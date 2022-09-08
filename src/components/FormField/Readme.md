Компонент-оболочка для элементов форм ([Input](https://inomdzhon.github.io/VKUI/#/Input), [Select](https://inomdzhon.github.io/VKUI/#/Select), [Textarea](https://inomdzhon.github.io/VKUI/#/Textarea) и другие).

```jsx
const Example = () => {
  return (
    <FormItem>
      <FormField>
        <CustomInput />
      </FormField>
    </FormItem>
  );
};

const CustomInput = () => {
  const style = {
    position: "relative",
    display: "block",
    width: "100%",
    margin: 0,
    paddingRight: 12,
    paddingLeft: 12,
    fontSize: 16,
    lineHeight: "20px",
    textOverflow: "ellipsis",
    color: "#000",
    border: "none",
    background: "transparent",
    zIndex: 2,
  };

  return <input type="text" style={style} placeholder="Кастомный инпут" />;
};

<Example />;
```
