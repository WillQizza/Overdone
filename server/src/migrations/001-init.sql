CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL,
    password_hash VARCHAR(64) NOT NULL,
    is_admin BOOLEAN NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE recipes (
    id INT NOT NULL AUTO_INCREMENT,
    owner_id INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    blurb TEXT,
    is_public BOOLEAN NOT NULL DEFAULT 0,
    PRIMARY KEY (id), 
    FOREIGN KEY(owner_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE recipe_user_shares (
    id INT NOT NULL AUTO_INCREMENT,
    recipe_id INT NOT NULL,
    user_id INT NOT NULL,
    is_editor BOOLEAN NOT NULL DEFAULT 0,
    PRIMARY KEY(id),
    FOREIGN KEY (recipe_id) REFERENCES recipes(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE recipe_link_shares (
    id INT NOT NULL AUTO_INCREMENT,
    recipe_id INT NOT NULL,
    url_code VARCHAR(10) NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(recipe_id) REFERENCES recipes(id) ON DELETE CASCADE,
    UNIQUE(url_code)
);

CREATE TABLE recipe_lists (
    id INT NOT NULL AUTO_INCREMENT,
    owner_id INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    blurb TEXT NOT NULL,
    is_public BOOLEAN NOT NULL DEFAULT 0,
    PRIMARY KEY(id),
    FOREIGN KEY(owner_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE recipe_list_item (
    recipe_list_id INT NOT NULL,
    recipe_id INT NOT NULL,
    PRIMARY KEY(recipe_list_id, recipe_id),
    FOREIGN KEY(recipe_list_id) REFERENCES recipe_lists(id) ON DELETE CASCADE,
    FOREIGN KEY(recipe_id) REFERENCES recipes(id) ON DELETE CASCADE
);

CREATE TABLE recipe_list_user_shares (
    id INT NOT NULL AUTO_INCREMENT,
    recipe_list_id INT NOT NULL,
    user_id INT NOT NULL,
    is_editor BOOLEAN NOT NULL DEFAULT 0,
    PRIMARY KEY(id),
    FOREIGN KEY (recipe_list_id) REFERENCES recipe_lists(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(id)  ON DELETE CASCADE
);

CREATE TABLE recipe_list_link_shares (
    id INT NOT NULL AUTO_INCREMENT,
    recipe_list_id INT NOT NULL,
    url_code VARCHAR(10) NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(recipe_list_id) REFERENCES recipe_lists(id) ON DELETE CASCADE,
    UNIQUE(url_code)
);