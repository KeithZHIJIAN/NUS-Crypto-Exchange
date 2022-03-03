#include <iostream>
#include "sql/database.h"

int main(int argc, char **argv)
{
    MYSQL_RES *res = connectMySQL();
    assembleOrder(res);
    return 0;
}