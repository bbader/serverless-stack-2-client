const dev = {
  STRIPE_KEY: "pk_test_Yn4iAG7U8Annz0KqknSbh6Q5",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-serverlessdeploymentbucket-vmrwyf0c473y"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://iz96uqltf4.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_jlkK2eBEv",
    APP_CLIENT_ID: "3fg934t3792b7tj45062m9ivgj",
    IDENTITY_POOL_ID: "us-east-1:0deb6bfd-5314-4ded-b29b-1b4e6ddf499b"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_Yn4iAG7U8Annz0KqknSbh6Q5",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-serverlessdeploymentbucket-16ts2vob4t6pe"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://a8jochi9nj.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_GGVVx6ttX",
    APP_CLIENT_ID: "5kc6ecb8u8l0p0nedbbudkf83o",
    IDENTITY_POOL_ID: "us-east-1:6636f663-5c05-4a0a-a8d7-2cfd1d02689b"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};