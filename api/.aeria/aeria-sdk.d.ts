import type {
  InferProperty,
  InferResponse,
  SchemaWithId,
  MakeEndpoint,
  RequestMethod,
  CollectionFunctionsPaginated

} from '@aeriajs/types'

declare type MirrorDescriptions = {
  "file": {
    "$id": "file",
    "owned": "always",
    "presets": [
      "owned"
    ],
    "indexes": [
      "filename",
      "link",
      "mime"
    ],
    "properties": {
      "mime": {
        "type": "string"
      },
      "size": {
        "type": "number"
      },
      "last_modified": {
        "type": "string",
        "format": "date-time"
      },
      "filename": {
        "type": "string"
      },
      "absolute_path": {
        "type": "string"
      },
      "relative_path": {
        "type": "string"
      },
      "immutable": {
        "type": "boolean"
      },
      "link": {
        "readOnly": true
      },
      "download_link": {
        "readOnly": true
      },
      "owner": {
        "$ref": "user",
        "noForm": true,
        "indexes": [
          "name"
        ]
      },
      "created_at": {
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      },
      "updated_at": {
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      }
    },
    "actions": {
      "deleteAll": {
        "name": "Remover",
        "ask": true,
        "selection": true
      }
    },
    "individualActions": {
      "remove": {
        "name": "Remover",
        "icon": "trash",
        "ask": true
      }
    }
  },
  "tempFile": {
    "$id": "tempFile",
    "temporary": {
      "index": "created_at",
      "expireAfterSeconds": 3600
    },
    "properties": {
      "created_at": {
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      },
      "absolute_path": {
        "type": "string"
      },
      "size": {
        "type": "number"
      },
      "mime": {
        "type": "number"
      },
      "collection": {
        "type": "string"
      },
      "filename": {
        "type": "string"
      },
      "updated_at": {
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      }
    }
  },
  "log": {
    "$id": "log",
    "required": [
      "context",
      "message"
    ],
    "properties": {
      "owner": {
        "$ref": "user",
        "noForm": true,
        "indexes": [
          "name"
        ]
      },
      "context": {
        "type": "string"
      },
      "message": {
        "type": "string"
      },
      "details": {
        "type": "object",
        "variable": true
      },
      "created_at": {
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      },
      "updated_at": {
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      }
    },
    "icon": "magnifying-glass",
    "presets": [
      "view"
    ],
    "filters": [
      "context",
      "message",
      "owner"
    ],
    "individualActions": {
      "ui:spawnView": {
        "name": "action.view",
        "icon": "magnifying-glass-plus",
        "translate": true
      }
    }
  },
  "resourceUsage": {
    "$id": "resourceUsage",
    "required": [],
    "properties": {
      "hits": {
        "type": "integer"
      },
      "last_maximum_reach": {
        "type": "string",
        "format": "date-time"
      },
      "created_at": {
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      },
      "updated_at": {
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      }
    }
  },
  "pizza": {
    "$id": "pizza",
    "icon": "pizza",
    "properties": {
      "name": {
        "type": "string"
      },
      "price": {
        "type": "number"
      },
      "rating": {
        "type": "integer",
        "minimum": 1,
        "maximum": 5,
        "hint": "Insert a number from 1 to 5"
      },
      "created_at": {
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      },
      "updated_at": {
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      }
    },
    "presets": [
      "crud"
    ],
    "actions": {
      "ui:spawnAdd": {
        "name": "action.add",
        "icon": "plus",
        "translate": true,
        "button": true
      }
    },
    "individualActions": {
      "ui:spawnEdit": {
        "name": "action.edit",
        "icon": "pencil-simple",
        "translate": true
      },
      "remove": {
        "name": "action.remove",
        "icon": "trash",
        "ask": true,
        "translate": true
      }
    }
  },
  "user": {
    "$id": "user",
    "required": [
      "name",
      "roles",
      "email"
    ],
    "form": [
      "name",
      "active",
      "roles",
      "email",
      "phone_number",
      "picture_file"
    ],
    "indexes": [
      "name"
    ],
    "freshItem": {
      "active": true
    },
    "properties": {
      "name": {
        "type": "string"
      },
      "given_name": {
        "readOnly": true
      },
      "family_name": {
        "readOnly": true
      },
      "active": {
        "type": "boolean"
      },
      "roles": {
        "type": "array",
        "items": {
          "type": "string",
          "enum": [
            "manager"
          ]
        },
        "uniqueItems": true
      },
      "email": {
        "type": "string",
        "inputType": "email",
        "unique": true
      },
      "password": {
        "type": "string",
        "inputType": "password",
        "hidden": true
      },
      "phone_number": {
        "type": "string",
        "mask": "(##) #####-####"
      },
      "picture_file": {
        "$ref": "file",
        "accept": [
          "image/*"
        ],
        "indexes": [
          "filename",
          "link",
          "mime"
        ]
      },
      "picture": {
        "readOnly": true
      },
      "group": {
        "type": "string"
      },
      "self_registered": {
        "type": "boolean",
        "readOnly": true
      },
      "updated_at": {
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      },
      "created_at": {
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      }
    },
    "presets": [
      "crud",
      "view",
      "duplicate"
    ],
    "layout": {
      "name": "grid",
      "options": {
        "title": "name",
        "badge": "roles",
        "picture": "picture_file",
        "information": "email",
        "active": "active",
        "translateBadge": true
      }
    },
    "individualActions": {
      "ui:spawnEdit": {
        "name": "action.edit",
        "icon": "pencil-simple",
        "translate": true
      },
      "route:/dashboard/user/changepass": {
        "name": "change_password",
        "icon": "key",
        "translate": true,
        "fetchItem": true
      },
      "remove": {
        "name": "action.remove",
        "icon": "trash",
        "ask": true,
        "translate": true
      },
      "ui:spawnView": {
        "name": "action.view",
        "icon": "magnifying-glass-plus",
        "translate": true
      },
      "ui:duplicate": {
        "name": "action.duplicate",
        "icon": "copy",
        "translate": true
      }
    },
    "icon": "users",
    "filters": [
      "name",
      "roles",
      "email",
      "phone_number"
    ],
    "table": [
      "name",
      "roles",
      "picture_file",
      "active",
      "updated_at"
    ],
    "tableMeta": [
      "email"
    ],
    "formLayout": {
      "fields": {
        "given_name": {
          "span": 3
        },
        "family_name": {
          "span": 3
        }
      }
    },
    "actions": {
      "ui:spawnAdd": {
        "name": "action.add",
        "icon": "plus",
        "translate": true,
        "button": true
      }
    }
  }
}


declare type MirrorRouter = {
  "/file/get": {
    "POST": {
      "roles": [
        "root"
      ]
    }
  },
  "/file/insert": {
    "POST": {
      "roles": [
        "root"
      ]
    }
  },
  "/file/download": {
    "POST": {
      "roles": [
        "root"
      ]
    }
  },
  "/file/remove": {
    "POST": {
      "roles": [
        "root"
      ]
    }
  },
  "/file/removeAll": {
    "POST": {
      "roles": [
        "root"
      ]
    }
  },
  "/log/get": {
    "POST": {
      "roles": [
        "root"
      ]
    }
  },
  "/log/getAll": {
    "POST": {
      "roles": [
        "root"
      ]
    }
  },
  "/log/insert": {
    "POST": {
      "roles": [
        "root"
      ]
    }
  },
  "/pizza/get": {
    "POST": {
      "roles": [
        "root"
      ]
    }
  },
  "/pizza/getAll": {
    "POST": {
      "roles": [
        "root"
      ]
    }
  },
  "/pizza/insert": {
    "POST": {
      "roles": [
        "root"
      ]
    }
  },
  "/pizza/remove": {
    "POST": {
      "roles": [
        "root"
      ]
    }
  },
  "/pizza/count": {
    "POST": {
      "roles": [
        "root"
      ]
    }
  },
  "/user/get": {
    "POST": {
      "roles": [
        "root"
      ]
    }
  },
  "/user/getAll": {
    "POST": {
      "roles": [
        "root"
      ]
    }
  },
  "/user/remove": {
    "POST": {
      "roles": [
        "root"
      ]
    }
  },
  "/user/upload": {
    "POST": {
      "roles": [
        "root"
      ]
    }
  },
  "/user/removeFile": {
    "POST": {
      "roles": [
        "root"
      ]
    }
  },
  "/user/insert": {
    "POST": {
      "roles": [
        "root"
      ]
    }
  },
  "/user/authenticate": {
    "POST": {
      "roles": [
        "root",
        "guest"
      ]
    }
  },
  "/user/activate": {
    "POST": {
      "roles": [
        "root"
      ]
    }
  },
  "/user/createAccount": {
    "POST": {
      "roles": [
        "root"
      ]
    }
  },
  "/user/getInfo": {
    "POST": {
      "roles": [
        "root"
      ]
    }
  },
  "/user/getActivationLink": {
    "POST": {
      "roles": [
        "root"
      ]
    }
  },
  "/pizza/topRatedPizzas": {
    "GET": null
  },
  "/reset": {
    "GET": null
  }
}


declare global {
  type Collections = {
    [K in keyof MirrorDescriptions]: {
      item: SchemaWithId<MirrorDescriptions[K]>
    }
  }
}

declare module 'aeria-sdk' {
  import { TopLevelObject, TLOFunctions } from 'aeria-sdk'

  type UnionToIntersection<T> = (T extends any ? ((x: T) => 0) : never) extends ((x: infer R) => 0)
    ? R
    : never

  type InferEndpoint<Route extends keyof MirrorRouter> = {
    [Method in keyof MirrorRouter[Route]]: Method extends RequestMethod
      ? MirrorRouter[Route][Method] extends infer Contract
        ? Contract extends
        | { response: infer RouteResponse }
        | { payload: infer RoutePayload  }
        | { query: infer RoutePayload  }
          ? MakeEndpoint<
            Route,
            Method,
            InferResponse<RouteResponse>,
            RoutePayload extends {}
              ? InferProperty<RoutePayload>
              : undefined
          >
          : MakeEndpoint<Route, Method>
        : never
      : never
    } extends infer Methods
      ? Methods[keyof Methods]
      : never

  type Endpoints = {
    [Route in keyof MirrorRouter]: Route extends `/${infer Coll}/${infer Fn}`
      ? Coll extends keyof Collections
        ? Fn extends keyof CollectionFunctionsPaginated<any>
          ? Record<Coll, Record<
              Fn, {
              POST: CollectionFunctionsPaginated<SchemaWithId<MirrorDescriptions[Coll]>>[Fn]
            }
            >>
          : InferEndpoint<Route>
        : InferEndpoint<Route>
      : InferEndpoint<Route>
  } extends infer Endpoints
    ? UnionToIntersection<Endpoints[keyof Endpoints]>
    : never

  type StrongelyTypedTLO = TopLevelObject & Endpoints

  export const url: string
  export const aeria: StrongelyTypedTLO
}

