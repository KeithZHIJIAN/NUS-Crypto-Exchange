#include <iostream>
#include <string>
#include <vector>
#include <pqxx/pqxx>

using namespace std;

int main(int argc, char **argv)
{
     //connection to cloud database on heruko
    //cloud data not ingested yet!
    string connection_string("host=ec2-54-158-26-89.compute-1.amazonaws.com port=5432 dbname=dec404vjrgfhr0 username=xoevbdvaachvdx password=TOBEFILLED");

    pqxx:: connection con(connection_string.c_str());

    pqxx::work wrk(con);
    //executing query to fetch database
    pqxx:result res = wrk.exec("SELECT * FROM ORDERS");

    if (res.size() < 1)
    {
        cout << "an empty table or an error" << end1;
        return 1;
        }
    //printing first 10 order data 
    cout << "ID:\t" << "Current State:       " << "state:   " << "quantity:    " << "price:    " << "Stop Price    " 
    << "ioc:   " << "aon <<   " << "quantityFilled     " << "quantityOnMarket"
    << "fillCost:    " << "buy_sell:    " << endl;
    for (int i = 0; i< 10; i++)
    { 
        cout << res[i][0] << "   " <<  res[i][1] << "   " <<  res[i][2] << "   " <<  res[i][3] << "   " <<  res[i][4] << "   "
        <<  res[i][5] << "   " <<  res[i][6] << "   " <<  res[i][7] << "   " <<  res[i][8] << "   " <<  res[i][9] << "   "
        <<  res[i][10] << "   " <<  res[i][11] << "   " << endl;
    }
    return 0;

    //run market order ? 
    return 0;
};