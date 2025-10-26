interface IRoute {
  path: string;
  component: React.FC;
  protected: boolean;
}

export type { IRoute };
