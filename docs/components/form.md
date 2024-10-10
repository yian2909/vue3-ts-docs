### 表单组件学习笔记

#### 1. 表单的基本元素
- **文本框 (Input)**：用于接收单行文本输入。
- **多行文本框 (Textarea)**：用于接收多行文本输入。
- **选择框 (Select)**：下拉列表，用于选择一个或多个选项。
- **复选框 (Checkbox)**：允许用户进行多重选择。
- **单选框 (Radio)**：用于在多个选项中选择一个。
- **按钮 (Button)**：提交或重置表单。

#### 2. 表单的属性
- **name**：定义表单元素的名称，方便后端接收数据。
- **value**：设置表单元素的默认值。
- **placeholder**：提供输入框的提示信息，指导用户输入。
- **required**：标记为必填项，确保用户输入。

#### 3. 表单的验证
- **客户端验证**：通过 JavaScript 验证用户输入的格式和有效性，例如邮箱格式、密码长度等。
- **服务器端验证**：确保安全性，避免恶意输入。

#### 4. 表单的事件处理
- **onSubmit**：表单提交事件，通常用于触发验证和数据处理。
- **onChange**：当输入内容改变时触发，适合即时反馈。
- **onFocus / onBlur**：聚焦和失去聚焦事件，适合输入提示和校验。

#### 5. 使用示例
```html
<form onSubmit="handleSubmit(event)">
    <label for="username">用户名</label>
    <input type="text" id="username" name="username" required placeholder="请输入用户名">
    
    <label for="password">密码</label>
    <input type="password" id="password" name="password" required placeholder="请输入密码">
    
    <button type="submit">提交</button>
</form>
```