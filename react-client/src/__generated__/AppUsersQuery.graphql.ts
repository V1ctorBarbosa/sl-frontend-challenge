/**
 * @generated SignedSource<<d6c21efa6a11dbae69803046aa29b31f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type AppUsersQuery$variables = {};
export type AppUsersQuery$data = {
  readonly users: ReadonlyArray<{
    readonly avatar: string;
    readonly email: string;
    readonly id: string | null;
    readonly name: string;
    readonly password: string;
    readonly phone: string;
  }>;
};
export type AppUsersQuery = {
  response: AppUsersQuery$data;
  variables: AppUsersQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "users",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "email",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "password",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "phone",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "avatar",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppUsersQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppUsersQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "df38cdb27a2d5c7aa2ee3d9010a7dfe1",
    "id": null,
    "metadata": {},
    "name": "AppUsersQuery",
    "operationKind": "query",
    "text": "query AppUsersQuery {\n  users {\n    id\n    name\n    email\n    password\n    phone\n    avatar\n  }\n}\n"
  }
};
})();

(node as any).hash = "f5766dcc099287e797fe72b471daa79c";

export default node;
