# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180208011438) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "players", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
  end

  create_table "seasons", force: :cascade do |t|
    t.string "season"
    t.integer "age"
    t.string "team"
    t.integer "gp"
    t.integer "g"
    t.integer "a"
    t.integer "pts"
    t.integer "plus_minus"
    t.integer "pim"
    t.integer "evg"
    t.integer "ppg"
    t.integer "sh"
    t.integer "gw"
    t.integer "eva"
    t.integer "ppa"
    t.integer "s"
    t.float "s_percentage"
    t.integer "toi"
    t.bigint "player_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["player_id"], name: "index_seasons_on_player_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "api_key"
    t.index ["email"], name: "index_users_on_email"
  end

  add_foreign_key "seasons", "players"
end
