import pandas as pd
import numpy as np
import os

# Get the current directory
data_dir = os.path.dirname(os.path.abspath(__file__))

# Read the CSV file
input_file = os.path.join(data_dir, 'players_data-2024_2025.csv')
df = pd.read_csv(input_file)

print(f"Original data shape: {df.shape}")
print(f"Original columns: {len(df.columns)}")

# ===== Data Cleaning =====

# 1. Remove completely empty rows
df = df.dropna(how='all')

# 2. Remove completely empty columns
df = df.dropna(axis=1, how='all')

# 3. Fill empty strings with NaN for consistency
df = df.replace('', np.nan)

# 4. Handle missing values for numeric columns - fill with 0
numeric_cols = df.select_dtypes(include=[np.number]).columns
for col in numeric_cols:
    df[col] = pd.to_numeric(df[col], errors='coerce').fillna(0)

# 5. Standardize column names - remove duplicates and clean
# Remove redundant duplicate columns that appear multiple times
seen = {}
cols_to_drop = []
for col in df.columns:
    base_col = col.split('_stats_')[0] if '_stats_' in col else col
    if base_col in seen:
        cols_to_drop.append(col)
    else:
        seen[base_col] = True

df = df.drop(columns=cols_to_drop)

# 6. Clean column names - convert to lowercase and remove extra spaces
df.columns = df.columns.str.strip().str.lower().str.replace(' ', '_')

# 7. Remove duplicate rows based on Player, Squad, and Comp combination
df = df.drop_duplicates(subset=['player', 'squad', 'comp'], keep='first')

# 8. Reset index
df = df.reset_index(drop=True)

# 9. Convert age to integer where possible
if 'age' in df.columns:
    df['age'] = pd.to_numeric(df['age'], errors='coerce').fillna(0).astype(int)

# 10. Convert born year to integer where possible
if 'born' in df.columns:
    df['born'] = pd.to_numeric(df['born'], errors='coerce').fillna(0).astype(int)

# 11. Fill remaining NaN values with 0 for numeric columns and empty string for object columns
df = df.fillna(0)

print(f"Cleaned data shape: {df.shape}")
print(f"Cleaned columns: {len(df.columns)}")
print("\nData Info:")
print(df.info())

# Save the cleaned data
output_file = os.path.join(data_dir, 'cleaned_data.csv')
df.to_csv(output_file, index=False)

print(f"\n✓ Cleaned data saved to: {output_file}")
print(f"Total rows: {len(df)}")
print(f"Total columns: {len(df.columns)}")
