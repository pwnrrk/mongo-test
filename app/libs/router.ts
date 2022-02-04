export interface Route {
  method: string;
  routePath: string;
  classPath: string;
  functionName: string;
  authenticate: boolean;
}

export const Routes: Route[] = [];

function applyFuntion(
  routePath: string,
  method: string,
  functionPath: string,
  authenticate: boolean
) {
  const splitted = functionPath.split("@");
  const classPath = splitted[0];
  const functionName = splitted[1];
  const route: Route = {
    method,
    routePath,
    classPath,
    functionName,
    authenticate,
  };
  Routes.push(route);
}

export default class Router {
  static get(path: string, functionPath: string, authenticate: boolean) {
    applyFuntion(path, "get", functionPath, authenticate);
  }
  static post(path: string, functionPath: string, authenticate: boolean) {
    applyFuntion(path, "post", functionPath, authenticate);
  }
  static put(path: string, functionPath: string, authenticate: boolean) {
    applyFuntion(path, "put", functionPath, authenticate);
  }
  static delete(path: string, functionPath: string, authenticate: boolean) {
    applyFuntion(path, "delete", functionPath, authenticate);
  }
}
