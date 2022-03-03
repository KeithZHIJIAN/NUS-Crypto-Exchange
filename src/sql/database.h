#include <iostream>
#include <mysql/mysql.h>
#include <string>
#include <vector>
#include "../util/Market.h"

using namespace orderentry;

struct connection_details
{
    const char *server, *user, *password, *database;
};

MYSQL *mysql_connection_setup(struct connection_details mysql_details)
{
    MYSQL *conn;
    conn = mysql_init(NULL);
    if (conn == NULL)
    {
        fprintf(stderr, "mysql_init() failed\n");
        exit(1);
    }
    if (mysql_real_connect(conn, mysql_details.server, mysql_details.user, mysql_details.password, mysql_details.database, 0, NULL, 0) == NULL)
    {
        fprintf(stderr, "mysql_real_connect() failed\n");
        exit(1);
    }
    return conn;
}

MYSQL_RES *mysql_execute_query(MYSQL *conn, const char *query)
{
    if (mysql_query(conn, query))
    {
        fprintf(stderr, "mysql_query() failed\n");
        exit(1);
    }
    return mysql_use_result(conn);
}

MYSQL_RES *connectMySQL()
{
    MYSQL *con;
    MYSQL_RES *res;

    struct connection_details mysql_details = {
        "localhost",
        "root",
        "S0101.zj",
        "orders"};
    con = mysql_connection_setup(mysql_details);
    res = mysql_execute_query(con, "SELECT * FROM orders");
    return res;
}

void assembleOrder(MYSQL_RES *res)
{
    std::ostream *log = &std::cout;
    Market market(log);
    MYSQL_ROW row;
    int num_fields = mysql_num_fields(res);

    while ((row = mysql_fetch_row(res)))
    {
        std::vector<std::string> words;
        for (int i = 1; i < num_fields; i++)
        {
            words.push_back(row[i]);
        }
        if (!market.apply(words))
        {
            std::cerr << "Cannot process command";
            for (auto word = words.begin(); word != words.end(); ++word)
            {
                std::cerr << ' ' << *word;
            }
            std::cerr << std::endl;
            bool prompt = true;
        }
    }
}