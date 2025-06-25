declare namespace Faker {
  interface FakerStatic {
    datatype: {
      number(max?: number): number;
      number(options?: {
        min?: number | undefined;
        max?: number | undefined;
        precision?: number | undefined;
      }): number;
      float(precision?: number): number;
      float(options?: {
        min?: number | undefined;
        max?: number | undefined;
        precision?: number | undefined;
      }): number;
      datetime(max?: number): Date;
      datetime(options?: {
        min?: number | undefined;
        max?: number | undefined;
      }): Date;
      string(length?: number): string;
      uuid(): string;
      boolean(): boolean;
      hexaDecimal(count?: number): string;
      json(): string;
      array(length?: number): Array<string | number>;
    };
  }
}
