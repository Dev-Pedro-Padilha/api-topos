# 📚 Documentação Swagger - API Topos Criativos

## 🚀 Acesso à Documentação

Após iniciar a aplicação, acesse:

**URL da Documentação Swagger:** `http://localhost:3001/api`

---

## 🔧 Configuração Implementada

### **Setup no main.ts**
```typescript
const config = new DocumentBuilder()
    .setTitle('API Topos Criativos')
    .setDescription('Sistema de gerenciamento para produtos criativos personalizados')
    .setVersion('1.0')
    .addBearerAuth({
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'Enter JWT token',
        in: 'header',
    }, 'JWT-auth')
    .build();
```

---

## 📋 Módulos Documentados

### 🔐 **Autenticação**
- **Tag:** `Autenticação`
- **Endpoints Públicos:** Não requerem token
- **Operações:**
  - `POST /auth/register` - Registrar usuário
  - `POST /auth/login` - Login e obter JWT

### 👤 **Clientes**
- **Tag:** `Clientes`
- **Autenticação:** JWT obrigatório
- **Operações:**
  - `POST /customer` - Criar cliente
  - `GET /customer` - Listar clientes

### 🛍️ **Produtos**
- **Tag:** `Produtos`
- **Autenticação:** JWT obrigatório
- **Operações:**
  - `POST /product` - Criar produto
  - `GET /product` - Listar produtos

### 📋 **Pedidos**
- **Tag:** `Pedidos`
- **Autenticação:** JWT obrigatório
- **Operações:**
  - `POST /orders` - Criar pedido
  - `GET /orders` - Listar pedidos

### 🛒 **Itens do Pedido**
- **Tag:** `Itens do Pedido`
- **Autenticação:** JWT obrigatório
- **Operações:**
  - `POST /list-shopping` - Adicionar item
  - `GET /list-shopping` - Listar itens

---

## 🔑 Como Usar Autenticação no Swagger

### **1. Fazer Login**
1. Acesse `POST /auth/login`
2. Insira credenciais:
   ```json
   {
     "username": "admin",
     "password": "123456"
   }
   ```
3. Copie o `access_token` da resposta

### **2. Autorizar no Swagger**
1. Clique no botão **"Authorize"** (🔒) no topo da página
2. Cole o token no campo **"Value"**
3. Clique em **"Authorize"**
4. Agora todos os endpoints protegidos estarão acessíveis

---

## 📊 Exemplos de Uso

### **Registro de Usuário**
```json
POST /auth/register
{
  "username": "admin",
  "password": "123456"
}
```

### **Login**
```json
POST /auth/login
{
  "username": "admin",
  "password": "123456"
}

// Resposta:
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "username": "admin"
  }
}
```

### **Criar Cliente (Requer JWT)**
```json
POST /customer
Authorization: Bearer {token}

{
  "name": "João Silva",
  "phone": "(11) 99999-9999",
  "adress": "Rua das Flores, 123"
}
```

---

## 🎨 Features do Swagger Implementadas

### **Decorators Utilizados**
- `@ApiTags()` - Agrupa endpoints por módulo
- `@ApiOperation()` - Descreve a operação
- `@ApiResponse()` - Define respostas possíveis
- `@ApiProperty()` - Documenta propriedades dos DTOs
- `@ApiBearerAuth()` - Indica autenticação JWT necessária
- `@ApiBody()` - Especifica corpo da requisição

### **Recursos Disponíveis**
- ✅ **Try it out** - Teste direto na interface
- ✅ **Schemas** - Visualização dos modelos de dados
- ✅ **Autenticação JWT** - Sistema integrado
- ✅ **Exemplos** - Dados de exemplo para todos os endpoints
- ✅ **Códigos de Resposta** - Documentação completa de status
- ✅ **Agrupamento** - Endpoints organizados por módulo

---

## 🔍 Estrutura da Documentação

### **Schemas Gerados**
- `CreateUserDto` - Dados para registro
- `LoginDto` - Dados para login
- `CreateCustomerDto` - Dados do cliente
- `CreateProductDto` - Dados do produto
- `CreateOrderDto` - Dados do pedido
- `CreateListShoppingDto` - Dados do item

### **Respostas Documentadas**
- `200` - Sucesso
- `201` - Criado com sucesso
- `400` - Dados inválidos
- `401` - Token JWT requerido/inválido
- `500` - Erro interno do servidor

---

## 🚀 Benefícios da Documentação Swagger

### **Para Desenvolvedores**
- Interface interativa para testes
- Documentação sempre atualizada
- Exemplos práticos de uso
- Validação automática de schemas

### **Para Integração**
- Especificação OpenAPI 3.0
- Geração automática de clientes
- Contratos de API claros
- Testes automatizados

### **Para Equipe**
- Documentação visual e intuitiva
- Redução de dúvidas sobre endpoints
- Padronização de respostas
- Facilita onboarding de novos membros

---

## 📱 Acesso Mobile/Responsivo

A interface Swagger é responsiva e funciona em:
- 💻 Desktop
- 📱 Mobile
- 📟 Tablet

---

**Implementado por:** Amazon Q Developer  
**Versão:** 1.0.0  
**Swagger UI:** Versão mais recente  
**OpenAPI:** 3.0