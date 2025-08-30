# Directus Type Generator

A TypeScript type generator for Directus CMS that automatically generates type-safe interfaces from your Directus schema, including support for complex relationships (M2M, O2M, M2A).

## Features

- 🔄 **Automatic Type Generation**: Generate TypeScript interfaces from your Directus collections and fields
- 🔗 **Relationship Support**: Handles Many-to-Many (M2M), One-to-Many (O2M), and Many-to-Any (M2A) relationships
- 🎯 **Type Safety**: Ensures your TypeScript code is fully type-safe when working with Directus data
- ⚡ **Fast**: Built with Bun for optimal performance
- 🧪 **Tested**: Includes comprehensive tests to ensure generated types are valid TypeScript

## Installation

This project uses [Bun](https://bun.sh/) as the runtime. Make sure you have Bun installed.

```bash
# Install dependencies
bun install
```

## Environment Setup

Create a `.env` file in the root directory with your Directus credentials:

```env
DIRECTUS_URL=https://your-directus-instance.com
DIRECTUS_TOKEN=your-static-token
```

## Usage

### Basic Usage

```typescript
import generateTypes from '@fidt/directus-typegen';

// Generate types with default options
const outPath = await generateTypes({});
console.log(`Types generated at: ${outPath}`);
```

### Advanced Usage

```typescript
import generateTypes from '@fidt/directus-typegen';

const outPath = await generateTypes({
  // Custom output file path
  outFile: './src/types/directus.ts',
  
  // Include specific Directus SDK types
  directusSdkImports: ['DirectusFile', 'DirectusRole', 'DirectusUser'],
  
  // Custom type generation options
  // ... other options
});
```

## API Reference

### `generateTypes(options: SchemaGenerateOptions)`

Generates TypeScript types from your Directus schema.

#### Options

- `outFile?: string` - Custom output file path (defaults to `./types.generated.ts`)
- `directusSdkImports?: string[]` - Array of Directus SDK types to import
- Additional schema generation options can be passed through

#### Returns

Returns a Promise that resolves to the path of the generated types file.

## Generated Types

The generator creates TypeScript interfaces for:

- **Collections**: Each collection becomes a TypeScript interface
- **Fields**: All fields with proper TypeScript types
- **Relationships**: 
  - M2M (Many-to-Many): Junction tables and array relationships
  - O2M (One-to-Many): Foreign key relationships
  - M2A (Many-to-Any): Polymorphic relationships

### Example Generated Output

```typescript
export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  role: number | Role;
  avatar: string | DirectusFile;
}

export interface Role {
  id: number;
  name: string;
  users: number[] | User[];
}
```

## Development

### Running Tests

```bash
bun test
```

### Project Structure

```
src/
├── index.ts          # Main entry point
├── directus.ts       # Directus client configuration
├── schema.ts         # Schema parsing and generation
├── relations.ts      # Relationship handling
└── utils.ts          # Utility functions

tests/
└── generate.test.ts  # Test suite
```

### Key Components

- **Schema**: Parses Directus collections and fields
- **Relations**: Handles complex relationship types (M2M, O2M, M2A)
- **Utils**: Type conversion and utility functions

## Type Mapping

The generator maps Directus field types to TypeScript types:

| Directus Type | TypeScript Type |
|---------------|-----------------|
| `uuid`, `character varying`, `text` | `string` |
| `integer`, `bigint`, `real` | `number` |
| `json`, `jsonb` | `Record<string, any>` |
| `timestamp with time zone` | `'datetime'` |
| `boolean` | `boolean` |
| `date` | `Date` |

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Run the test suite: `bun test`
6. Submit a pull request

## License

This project is private and proprietary.

## Dependencies

- `@directus/sdk` - Directus SDK for API communication

## Dev Dependencies
- `typescript` - TypeScript support
- `@biomejs/biome` - Code formatting and linting
- `bun` - JavaScript runtime and package manager
