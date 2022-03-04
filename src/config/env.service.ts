import * as dotenv from 'dotenv';
dotenv.config();
class EnvService {
  constructor(private readonly envs: NodeJS.ProcessEnv) {}
  public get(key: string, throwOnMissing = true): string {
    const value = this.envs[key];
    if (!value && throwOnMissing) {
      throw new Error(`config error - missing env.${key}`);
    }
    return value;
  }

  public isProduction() {
    const mode = this.get('MODE', false);
    return mode != 'DEV';
  }
}

const envs = new EnvService(process.env);
export default envs;
