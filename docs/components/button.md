### 按钮组件学习笔记

#### 1. 按钮的属性
- **类型 (type)**：
  - `button`：普通按钮。
  - `submit`：提交按钮，常用于表单。
  - `reset`：重置按钮，清空表单内容。
  
- **状态 (state)**：
  - `disabled`：禁用状态，用户无法操作。
  - `loading`：加载状态，通常会显示一个加载图标。
  
- **大小 (size)**：
  - `small`、`medium`、`large`：用于定义按钮的不同尺寸。

- **颜色 (color)**：
  - `primary`、`secondary`、`danger` 等，定义按钮的主题色。

#### 2. 按钮的样式
- **CSS 样式**：使用 CSS 来调整按钮的外观，包括背景色、边框、字体等。
- **hover 和 active 状态**：通过伪类 `:hover` 和 `:active` 定义按钮在不同状态下的样式变化。

#### 3. 按钮的事件处理
- **点击事件 (onClick)**：常用的事件，可以绑定到按钮上，执行相应的逻辑。
- **键盘事件**：支持键盘操作，例如 Enter 键触发点击。

#### 4. 使用示例
```html
<button type="button" class="btn btn-primary" onClick="handleClick()">提交</button>
```