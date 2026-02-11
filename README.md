### NG esling rulezz

ESlint rules for angular applications.

## Compatibility

| Lib version | Angular version | Eslint version |
|:------------|:----------------|:---------------|
| ~1.0.0      | >=13.0.0        | -              |
| ~1.1.0      | 15.0.0          | -              |
| ~1.2.0      | 16.0.0          | -              |
| ~1.3.0      | 17.0.0          | -              |
| ~1.4.0      | 18.0.0          | -              |
| ~1.5.0      | 19.0.0          | <9.0.0         |
| ~1.6.0      | 20.0.0          | ^9.0.0         |
| ~1.7.0      | 21.0.0          | ^9.0.0         |

## Usage

### Eslint

Add this to your `eslint.config.mjs`
```js
import ngEslintRulezzConfig from "@touch4it/ng_eslint_rulezz";

export default [...ngEslintRulezzConfig];
```

### Prettier

Import prettier to yout `.prettierrc.yaml` file:

```yaml
import: '@touch4it/ng_eslint_rulezz/prettier/index.mjs'
```