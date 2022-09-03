### Dependencies

You will need:

node
axios
mysql

Dev Dependencies
express
http-proxy-middleware
nodemon

### Step 1 - Clone the repository:

From the command line, clone the repository:

$ git clone https://github.com/jayashibus/giftredeem.git
https://github.com/jayashibus/giftredeem

### Step 2

```sh
npm install
```

### Step 3

### `npm start`

The Application Runs on localhost:3000

### step 4

### `npm run server`

Step 5

CREATE DATABASE giftredeem;

CREATE TABLE `staff_details` (
`staff_pass_id` varchar(255) NOT NULL,
`team_name` varchar(255) NOT NULL,
`created_at` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `staff_details` (`staff_pass_id`, `team_name`, `created_at`) VALUES
('STAFF_H123804820G', 'BASS', '1623772799000'),
('MANAGER_T999888420B', 'RUST', '1623772799000'),
('BOSS_T000000001P', 'RUST', '1623872111000');
COMMIT;

CREATE TABLE `redemption` (
`staff_pass_id` varchar(255) NOT NULL,
`team_name` varchar(255) DEFAULT NULL,
`redeemed_at` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

Step 6

Update DB details in server/router/index.js Line 5
const db = mysql.createConnection({
host: "localhost",
user: "root",
password: "",
database: "giftredeem",
});
