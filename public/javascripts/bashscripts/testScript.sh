pwd
echo '' >> './logs/log1.txt'
for ((i=0; i<=10; i++))
do 
    echo 'hello there, General Kenobi' $i >> './logs/log1.txt'
done